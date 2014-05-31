UiControls = window.UiControls || Ember.Namespace.create();

UiControls.RadioButtonGroup = Ember.View.extend({
  classNames: ['ember-radio-button-group'],
  group: 'uicontrols-radio-button-group',

  value: null
});
 
UiControls.RadioButton = Ember.View.extend({
  title: null,
  checked: function () {
    return this.get('parentView.value') === this.get('value');
  }.property('parentView.value').volatile(),
  groupBinding: 'parentView.group',
  disabled: false,
  value: null,
  classNames: ['vwo-radio-button'],
  template: Ember.Handlebars.compile('<label><input type="radio" {{bind-attr disabled="view.disabled" name="view.group" value="view.value" stylename="view.stylename" checked="view.checked"}} /> {{view.title}}</label>'),
  click: function () {
    var checked = this.get('checked');
    if (!checked) {
      var query = App.getQuery(this.get('value'));
      var stylename = this.get('stylename');
      App.loadTiles(query, stylename);
    }

    this.set('parentView.value', this.get('value'));
  }
});