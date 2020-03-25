<template>
    <div>
        <p>通过v-solt插槽实现父组件获取子组件的属性</p>
        <child5 v-slot="scope">
            {{scope.person.name}}
        </child5>
    </div>
</template>
<script>
import Child5 from '../component/child5';
export default {
    components:{
        Child5
    }
    
}
</script>