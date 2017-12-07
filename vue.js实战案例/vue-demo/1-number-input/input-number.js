function isValueNumber(value) {
	return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/).test(value + '');  //test() 方法用于检测一个字符串是否匹配某个模式.返回 true 或 false。
}

Vue.component('input-number', {
	template: '\
		<div class="input-number"> \
			<input \
				type="text" \
				:value="currentValue" \
				@change="handleChange" \
				@keyup.up="handleKeyup" \
				@keyup.down="handleKeydown"> \
			<button \
				@click="handleDown" \
				:disabled="currentValue <= min"> - </button> \
				<button \
					@click="handleUp" \
					:disabled="currentValue >= max"> + </button> \
		</div>',
	props: {
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		value: {
			type: Number,
			default: 0
		},
		step: {
			type: Number,
			default: 1
		}
	},
	data: function() {
		return {
			currentValue: this.value
		};
	},
	watch: {
		currentValue: function(val) {
			this.$emit('input', val);
			this.$emit('on-change', val);
		},
		value: function(val) {
			this.updateValue(val);
		}
	},
	methods: {
		handleDown: function() {
			if (this.currentValue <= this.min) return;
			this.currentValue -= this.step;
		},
		handleUp: function() {
			if(this.currentValue >= this.max) return;
			this.currentValue += this.step;
		},
		handleChange: function(event) {
			var val = event.target.value.trim();	//target 事件属性可返回事件的目标节点,Trim 函数删除字符串两边的空格。
			var max = this.max;
			var min = this.min;
			if (isValueNumber(val)) {
				val = Number(val);
				this.currentValue = val;

				if (val > max) {
					this.currentValue = max;
				} else if (val < min) {
					this.currentValue = min;
				}
			} else {
				event.target.value = this.currentValue;
			}
		},
		handleKeyup: function(event) {
			this.handleUp();
		},
		handleKeydown: function(event) {
			this.handleDown();
		},
		updateValue: function(val) {
			if(val > this.max) { val = this.max };
			if(val < this.min) { val = this.min };
			this.currentValue = val;
		}
	},
	mounted: function() {
		this.updateValue(this.value);
	}
});