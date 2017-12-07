Vue.directive('clickoutside', {
	bind: function (el, binding, vnode) {
		function documentHandler(e) {
			if (el.contains(e.target)) { //contains方法判断元素A是否包含了元素B
				return false;
			}
			if (binding.expression) { //判断当前的指令v-clickoutside有没有写表达式
				binding.value(e);
			}
		}
		el.__vueClickOutside__ = documentHandler;		//在自定义指令中，不能再用this.xxx的形式在上下文中声明一个变量，所以用el.__vueClickOutside__引用了documentHandler
		document.addEventListener('click', documentHandler);
	},
	unbind: function(el, binding) {
		document.removeEventListener('click', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	}
});