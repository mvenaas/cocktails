//Brink in all info from DB
Template.card.helpers ({
  "drinks": function() {
    return drinks.find({});
  },
  "selectedClass" : function() {
    var drinkId = this._id;
    var selectedDrink =Session.get("selectedDrink");
    if (drinkId == selectedDrink) {
      return "selected";
    }
  }
});

//All events for the "card" template
Template.card.events({
  "click .cardStyle": function (event, template) {
    var drinkId = this._id;
    Session.set("selectedDrink", drinkId);
  }
});
