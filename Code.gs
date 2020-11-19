function doGet(e) {
 return HtmlService.createHtmlOutputFromFile("review")
  
}
function getTableData(){
  var url = "https://docs.google.com/spreadsheets/d/1uWkj8jL5R61fRTxDjqMecnKBXpNg1fiPz0Gf-xFjvGE/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  var data = ws.getRange(2,1,ws.getLastRow()-1,3).getValues();
  return data;
}