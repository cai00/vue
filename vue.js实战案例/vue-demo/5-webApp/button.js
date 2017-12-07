var prefixCls = 'web-btn';

Vue.component('web-button', {
	name: 'web-button',
	template: '\
		<button :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick"> \
			<span><slot></slot></span> \
		</button> \
		',
	props: {
		type: {
			validator: function (value) {
				return oneOf(value, ['primary', 'ghost', 'success', 'warning', 'error']);
			}
		},
		disabled: Boolean,
		htmlType: {
			default: 'button',
			validator: function (value) {
				return oneOf(value, ['button', 'submit', 'reset']);
			}
		}
	},
	date: function () {
		return {
		};
	},
	computed: {
		classes: function () {
			return [
				`${prefixCls}`,
				{
					[`${prefixCls}-${this.type}`]: !!this.type
				}
			]
		}
	},
	methods: {
		handleClick (event) {
			this.$emit('click', event);
		}
	},
	mounted: function () {
	}
});