$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktops.feature");
formatter.feature({
  "line": 2,
  "name": "Desktop Page Test",
  "description": "as a user I want to arrange products and add to shopping cart",
  "id": "desktop-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8184552400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to select product in alphabetical order",
  "description": "",
  "id": "desktop-page-test;user-should-be-able-to-select-product-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sortby descending position \"Name Z to A\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 320576800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToDesktopTab()"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 1325725600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name Z to A",
      "offset": 37
    }
  ],
  "location": "DesktopSteps.iSelectSortbyDescendingPosition(String)"
});
formatter.result({
  "duration": 7852900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 1551991000,
  "status": "passed"
});
formatter.after({
  "duration": 1046488200,
  "status": "passed"
});
formatter.before({
  "duration": 4860378400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to add product to shopping cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-be-able-to-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover to desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select sortby ascending position \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the HP Text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select Delivery Date \"2023-01-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Enter Qty \"1\" using Select class",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Message \"Success: You have added HP LP3065 to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the Delivery Date \"Delivery Date: 2023-01-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the Model \"Product 21\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Todat \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 589900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToDesktopTab()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 1369971500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 36
    }
  ],
  "location": "DesktopSteps.iSelectSortbyAscendingPosition(String)"
});
formatter.result({
  "duration": 2466055900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 161800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 20
    }
  ],
  "location": "DesktopSteps.verifyTheHPText(String)"
});
formatter.result({
  "duration": 73344200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023-01-30",
      "offset": 24
    }
  ],
  "location": "DesktopSteps.iSelectDeliveryDate(String)"
});
formatter.result({
  "duration": 12022824300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "DesktopSteps.iEnterQtyUsingSelectClass(String)"
});
formatter.result({
  "duration": 140952300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 74849100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added HP LP3065 to your shopping cart!",
      "offset": 20
    }
  ],
  "location": "DesktopSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 372434200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "duration": 66573400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 43966100,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.tutorialsninja.steps.DesktopSteps.verifyTheText(DesktopSteps.java:80)\r\n\tat ✽.And Verify the text \"Shopping Cart\"(desktops.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.verifyTheProductName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery Date: 2023-01-30",
      "offset": 26
    }
  ],
  "location": "DesktopSteps.verifyTheDeliveryDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 18
    }
  ],
  "location": "DesktopSteps.verifyTheModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 18
    }
  ],
  "location": "DesktopSteps.verifyTheTodat(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1161133100,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page Test",
  "description": "as a user I want to navigate to tabs",
  "id": "home-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3676476100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify desktop text message",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 55900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToDesktopTab()"
});
formatter.result({
  "duration": 90900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 1214827000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyDesktopTextMessage()"
});
formatter.result({
  "duration": 43334800,
  "status": "passed"
});
formatter.after({
  "duration": 748441700,
  "status": "passed"
});
formatter.before({
  "duration": 3885905000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to laptop and notebooks page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-laptop-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover to laptop and desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show all laptop and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify laptop and notebooks text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 42600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopAndDesktopTab()"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllLaptopAndNotebooks()"
});
formatter.result({
  "duration": 1179830700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyLaptopAndNotebooksText()"
});
formatter.result({
  "duration": 51219700,
  "status": "passed"
});
formatter.after({
  "duration": 728286600,
  "status": "passed"
});
formatter.before({
  "duration": 3767551200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should navigate to components page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I mouse hover to component tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on show all components",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify components text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToComponentTab()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllComponents()"
});
formatter.result({
  "duration": 1206486800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyComponentsText()"
});
formatter.result({
  "duration": 59948600,
  "status": "passed"
});
formatter.after({
  "duration": 718469500,
  "status": "passed"
});
formatter.uri("laptopnsandnotebooks.feature");
formatter.feature({
  "line": 2,
  "name": "Laptops and notebooks Test",
  "description": "as a user I want to place order successfully",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4129455400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to display product price high to low",
  "description": "",
  "id": "laptops-and-notebooks-test;user-should-able-to-display-product-price-high-to-low",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover to laptop and desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on show all laptop and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the Product price will arrange in High to Low order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopAndDesktopTab()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllLaptopAndNotebooks()"
});
formatter.result({
  "duration": 1084304900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iSelectSortBy(String)"
});
formatter.result({
  "duration": 571007400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyTheProductPriceWillArrangeInHighToLowOrder()"
});
formatter.result({
  "duration": 383175600,
  "status": "passed"
});
formatter.after({
  "duration": 746015900,
  "status": "passed"
});
formatter.before({
  "duration": 3685394600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;user-should-be-able-to-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover to laptop and desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on show all laptop and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Product \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the text \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on ‘Add To Cart’ button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message \"Success: You have added MacBook to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on link “shopping cart” display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the text after adding \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the Product name after adding \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Change Quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on “Update” Tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the message \"Success: You have modified your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Total \"£737.45\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on “Checkout” button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the text \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Text \"New Customer\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Click on Guest Checkout radio button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Fill the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Add Comments About your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Click on Continue button again",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the lastMessage \"Warning: Payment method required!\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopAndDesktopTab()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllLaptopAndNotebooks()"
});
formatter.result({
  "duration": 1143126800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iSelectSortBy(String)"
});
formatter.result({
  "duration": 562745500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 16
    }
  ],
  "location": "LaptopsAndNotebooksSteps.selectProduct(String)"
});
formatter.result({
  "duration": 1842904800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 69622300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 181607500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added MacBook to your shopping cart!",
      "offset": 20
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 226826700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "duration": 453666100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 30
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheTextAfterAdding(String)"
});
formatter.result({
  "duration": 105957800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 38
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheProductNameAfterAdding(String)"
});
formatter.result({
  "duration": 67939200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 190641500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnUpdateTab()"
});
formatter.result({
  "duration": 677929600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have modified your shopping cart!",
      "offset": 20
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 96985800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£737.45",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheTotal(String)"
});
formatter.result({
  "duration": 917334400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 460753800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 52025300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 157200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "duration": 3204634700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueTab()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iFillTheMandatoryFields()"
});
formatter.result({
  "duration": 1889067500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 2129618800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAddCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "duration": 705538600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iCheckTheTermsConditionsCheckBox()"
});
formatter.result({
  "duration": 161625600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButtonAgain()"
});
formatter.result({
  "duration": 2081869800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning: Payment method required!",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheLastMessage(String)"
});
formatter.result({
  "duration": 115800,
  "status": "passed"
});
formatter.after({
  "duration": 898819400,
  "status": "passed"
});
formatter.uri("myaccounts.feature");
formatter.feature({
  "line": 2,
  "name": "my accounts Test",
  "description": "as a user I want to register and log in successfully",
  "id": "my-accounts-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3665576600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Register page successfully",
  "description": "",
  "id": "my-accounts-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the register text \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 155976800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 63
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameter(String)"
});
formatter.result({
  "duration": 21052616200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 26
    }
  ],
  "location": "MyAccountsSteps.verifyTheRegisterText(String)"
});
formatter.result({
  "duration": 46433900,
  "status": "passed"
});
formatter.after({
  "duration": 720322700,
  "status": "passed"
});
formatter.before({
  "duration": 3504320200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to Login page successfully",
  "description": "",
  "id": "my-accounts-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter as \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the returning text \"Returning Customer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 306710800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 66
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameterAs(String)"
});
formatter.result({
  "duration": 592748000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 27
    }
  ],
  "location": "MyAccountsSteps.verifyTheReturningText(String)"
});
formatter.result({
  "duration": 84077400,
  "status": "passed"
});
formatter.after({
  "duration": 802450300,
  "status": "passed"
});
formatter.before({
  "duration": 3478813500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to Register Account Successfully",
  "description": "",
  "id": "my-accounts-test;user-should-be-able-to-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Enter First Name",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Enter Email",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Enter Telephone",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Enter Password Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Select Subscribe Yes radio button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Click on after privacy Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Verify the message \"Your Account Has Been Created!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on after message Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Call the method \u0027selectMyAccountOptions\u0027 method and pass the parameter \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify the account logout text \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Click on after logout Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 147295800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 63
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameter(String)"
});
formatter.result({
  "duration": 21147036100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 570706400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterLastName()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterEmail()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterTelephone()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterPassword()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterPasswordConfirm()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iSelectSubscribeYesRadioButton()"
});
formatter.result({
  "duration": 87173200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 79042300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterPrivacyContinueButton()"
});
formatter.result({
  "duration": 730401600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 22
    }
  ],
  "location": "MyAccountsSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 50582000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterMessageContinueButton()"
});
formatter.result({
  "duration": 330344600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 63184300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 74
    }
  ],
  "location": "MyAccountsSteps.iCallTheMethodSelectMyAccountOptionsMethodAndPassTheParameter(String)"
});
formatter.result({
  "duration": 569514400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 32
    }
  ],
  "location": "MyAccountsSteps.verifyTheAccountLogoutText(String)"
});
formatter.result({
  "duration": 42715600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterLogoutContinueButton()"
});
formatter.result({
  "duration": 386270100,
  "status": "passed"
});
formatter.after({
  "duration": 785965300,
  "status": "passed"
});
formatter.before({
  "duration": 3495115700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User should be able to login and logout successfully",
  "description": "",
  "id": "my-accounts-test;user-should-be-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Enter Email address",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Verify text \"My Account\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Call the method \u0027selectMyAccountOptions\u0027 method and pass the parameter \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Verify the account logout text \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on after logout Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 147400900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 63
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameter(String)"
});
formatter.result({
  "duration": 508760300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterEmailAddress()"
});
formatter.result({
  "duration": 345065900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterLastName()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterPassword()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 762309800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 13
    }
  ],
  "location": "MyAccountsSteps.verifyText(String)"
});
formatter.result({
  "duration": 60612900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 88519100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 74
    }
  ],
  "location": "MyAccountsSteps.iCallTheMethodSelectMyAccountOptionsMethodAndPassTheParameter(String)"
});
formatter.result({
  "duration": 755881600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 32
    }
  ],
  "location": "MyAccountsSteps.verifyTheAccountLogoutText(String)"
});
formatter.result({
  "duration": 86799600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterLogoutContinueButton()"
});
formatter.result({
  "duration": 468200600,
  "status": "passed"
});
formatter.after({
  "duration": 764588100,
  "status": "passed"
});
});