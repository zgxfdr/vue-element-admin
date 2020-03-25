<template>
	<div>
		<h3>我是method3</h3>
		<div>
			<div>
				<p>
					举个例子，在一个包含 title prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：
					this.$emit('update:title', newTitle)
					然后父组件可以监听那个事件并根据需要更新一个本地的数据属性。
				</p>
			</div>
		</div>
		<p>父组件的messgae随着子组件文本框的值改变：{{message}}</p>
		<child3 :message.sync="message" />
	</div>
</template>
<script>
import Child3 from "../component/child3";
export default {
	components: {
		Child3
	},
	data() {
		return {
			message: "day day up!"
		};
	},
	methods: {}
};
</script>