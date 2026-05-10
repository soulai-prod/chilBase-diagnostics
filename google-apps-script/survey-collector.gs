/**
 * Google Apps Script для сбора ответов опросника ChillBase AI Diagnostics
 *
 * ИНСТРУКЦИЯ ПО УСТАНОВКЕ:
 *
 * 1. Создайте новую Google Таблицу (Google Sheets)
 * 2. Откройте Extensions → Apps Script
 * 3. Вставьте этот код
 * 4. Нажмите Deploy → New deployment
 * 5. Тип: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Нажмите Deploy
 * 9. Скопируйте URL (он будет вида https://script.google.com/macros/s/XXXX/exec)
 * 10. Вставьте этот URL в survey_universal.html вместо 'YOUR_GOOGLE_SCRIPT_URL_HERE'
 *
 * Таблица будет автоматически заполняться ответами.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Если заголовков нет — создаём
    if (sheet.getLastRow() === 0) {
      var headers = Object.keys(data);
      sheet.appendRow(headers);
      // Форматирование заголовков
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#0A2E4D');
      headerRange.setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    }

    // Получаем заголовки из первой строки
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var row = [];

    // Проверяем каждый ключ из данных
    for (var key in data) {
      var colIndex = headers.indexOf(key);
      if (colIndex === -1) {
        // Новый столбец — добавляем заголовок
        headers.push(key);
        sheet.getRange(1, headers.length).setValue(key).setFontWeight('bold').setBackground('#0A2E4D').setFontColor('#FFFFFF');
        colIndex = headers.length - 1;
      }
      // Значение может быть массивом (checkbox)
      var value = data[key];
      if (Array.isArray(value)) {
        value = value.join(', ');
      }
      row[colIndex] = value;
    }

    // Заполняем пустые ячейки
    for (var i = 0; i < headers.length; i++) {
      if (row[i] === undefined) row[i] = '';
    }

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      row: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'ChillBase Survey Collector is running. Use POST to submit data.'
  })).setMimeType(ContentService.MimeType.JSON);
}
