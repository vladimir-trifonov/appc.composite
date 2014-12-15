module.exports = function(APIBuilder) {
	return APIBuilder.Model.extend('article', {
		fields: {
			title: { type: String },
			content: { type: String },
			author_id: { type: Number },
			author_first_name: { type: String, name: 'first_name', required: false },
			author_last_name: { type: String, name: 'last_name', required: false }
		},
		connector: 'appc.composite',

		metadata: {
			'appc.composite': {
				models: [
					{
						name: 'post'
					},
					{
						name: 'user',
						readonly: true,
						left_join: {
							'id': 'author_id'
						}
					}
				]
			}
		}
	});
};