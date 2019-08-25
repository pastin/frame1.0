import activePublic from './page/activePublic/index.vue'
import table from './page/activePublic/table.vue'
import echarts from './page/charts/echarts.vue'

export default[
    {path: '/activePublic', component: activePublic, name: 'indexTable'},
    {path: '/table2', component: table, name: "nameTable"},
    {path: '/echarts', component: echarts, name: "echarts"}
]