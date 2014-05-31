var queryDefault = {
	query: {
	  match: {
	    category: ''
	  }
	}
};

App.getQuery = function(category) {
	var catQuery = queryDefault;

	if (!category || typeof(category) !== 'string') {
		console.warn('Invalid category', typeof(category));
		return '';
	}

	if (category !== '' && category.toLowerCase() !== 'no category') {
		catQuery.query.match.category = category;
	}

  return catQuery;
};

Ember.Handlebars.helper('getQuery', App.getQuery);