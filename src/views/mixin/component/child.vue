<template>
	<div>
		<button @click="change">$emit向父组件传递值</button>
		<div>{{message}}</div>
		
	</div>
	
</template>
<script>
export default {
	props:['title'],
	data() {
		return {
			message: 'hello',
			foo: 'abc',
			hi: 'hi'
		}
	},
	created: function () {
		this.hello()
	},
	methods: {
		change(){
			this.$emit("update:title","我已经发生改变啦，haha~");
		},
		foo1: function () {
			console.log('foo')
		},
		conflicting: function () {
			console.log('from mixin')
		},
		hello: function () {
			console.log('hello from mixin!')
			this.message = "hello from mixin!";
		}
	},
	//额外临时加入时，用于显示日志
	updated: function () {
		console.log("数据放生变化,变化成" + this.num + ".");
	}

}
</script>