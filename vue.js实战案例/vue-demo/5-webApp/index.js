var app = new Vue({
	el: '#app',
	data: function() {
		return {
			pageState: 1,
			sexValue: '',
			likeValue: [],
			message: '',
			sexData: [
				{
					id: 1,
					name: '男'
				},
				{
					id: 2,
					name: '女'
				},
				{
					id: 3,
					name: '保密'
				}
			],
			likeData: [
				{
					id: 1,
					name: '看书'
				},
				{
					id: 2,
					name: '游泳'
				},
				{
					id: 3,
					name: '跑步'
				},
				{
					id: 4,
					name: '看电影'
				},
				{
					id: 5,
					name: '听音乐'
				}
			]
		};
	},
	methods: {
		handleReset: function() {
			console.log("333");
		},
		bandleNext1: function() {
			this.pageState = 2;
		},
		bandleNext2: function() {
			this.pageState = 3;
		},
		bandleSubmit: function() {
			this.pageState = 1;
		},
		bandlePre1: function() {
			this.pageState = 1;
		},
		bandlePre2: function() {
			this.pageState = 2;
		}
	},
	watch: {
		pageState: function(val) {
			this.pageState = val;
		}
	},
	mounted: function() {
	}
});