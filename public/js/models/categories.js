App.CategoriesRoute = Ember.Route.extend({
  model: function() {
    return [
			{ name: 'Shopping', 							style: 'shopping' 						},
			{ name: 'Home & Garden', 					style: 'home_garden' 					},
			{ name: 'Retail', 								style: 'retail' 							},
			{ name: 'Manufacturing', 					style: 'manufacturing' 				},
			{ name: 'Banks & Credit Unions', 	style: 'banks_credit_unions'	},
			{ name: 'Health Services', 				style: 'health_services' 			},
			{ name: 'Personal', 							style: 'personal' 						},
			{ name: 'Sports & Exercise', 			style: 'sports_exercise' 			},
			{ name: 'Travel', 								style: 'travel' 							},
			{ name: 'Professional', 					style: 'professional' 				},
			{ name: 'Bars & Pubs', 						style: 'bars_pubs' 						},
			{ name: 'Social Services', 				style: 'social_services' 			},
			{ name: 'Education', 							style: 'education' 						},
			{ name: 'Food & Beverages', 			style: 'food_beverages' 			},
			{ name: 'Autos & Motor Vehicles', style: 'autos_motor_vehicles' },
			{ name: 'Building & Trades', 			style: 'building_trades' 			},
			{ name: 'Restaurant', 						style: 'restaurant' 					},
			{ name: 'No category', 						style: 'no_category' 					},
		];
  }
});