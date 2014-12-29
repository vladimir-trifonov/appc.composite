module.exports = function(APIBuilder) {
	return APIBuilder.Model.extend('employeeHabit', {
		fields: {
			fname: { type: String, description: 'First name', name: 'first_name', model: 'appc.mysql/nolan_user' },
			lname: { type: String, description: 'Last name', name: 'last_name', model: 'appc.mysql/nolan_user' },
			email: { type: String, description: 'Email address', name: 'email_address', model: 'appc.mysql/nolan_user' },
			habit: { type: Array, description: 'Employee bad habits', model: 'appc.mysql/nolan_user_bad_habits' }
		},
		connector: 'appc.composite',
		metadata: {
			'appc.composite': {
				left_join: { // there would be a property for each join type
					model: 'appc.mysql/nolan_user_bad_habits',
					readonly: true,
					multiple: true,
					join_properties: {
						'user_id': 'id'
					}
				}
			}
		}
	});
};