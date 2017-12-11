(function(window, undefined) {
  var dictionary = {
    "c5c0604c-261d-4d78-b755-bd479d6dedc2": "reportCritical",
    "29e9aabb-2242-42e7-9704-52246eb9532a": "Expense",
    "cc8ef894-3751-40a6-817f-a94ffd93813c": "Category",
    "f1f2a2ea-d495-458f-a807-78b89a1c7b8b": "reportNomal",
    "1dca9830-e8d1-4dc4-b804-86f9df6d4f9c": "addExpenditure",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LOGO",
    "6363d8a9-3aa3-4656-9cba-e4151d8bd1dd": "ReportFamily",
    "6a2559fa-8131-43d1-b65c-5633c59b1889": "Family",
    "1066b722-ab89-41bc-9d78-5c6a005bff20": "login",
    "e694569e-3a69-45c2-85c3-64e0d12eb2ae": "SelectExpenseType",
    "37074dc5-6379-442f-a37f-9e73aa310dd7": "signin",
    "5dcb6a67-1938-4b64-b145-51ecd54b6ec4": "addIncome",
    "dd5e2ee7-d037-441c-b684-f55353e039b5": "Search",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);