Vue.component('pane', {
	name: 'pane',
	template: '\
		<div class="pane" v-show="show"> \
			<slot></slot> \
		</div>',
	data: function () {
		return {
			show: true
		};
	},
	props: {
		//标识pane
		name: {
			type: String
		},
		//标签页标题
		label: {
			type: String,
			default: ''
		},
		closable: {
			type: Boolean,
			default: null
		}
	},
	methods: {
		updateNav () {
			this.$parent.updateNav();
		}
	},
	watch: {
		label() {
			this.updateNav();
		}
	},
	mounted () {
		this.updateNav();
	}
});