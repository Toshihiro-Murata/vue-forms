var mixin = {
    props: ['clientid', 'acstkn', 'api'],
    methods: {
        submit: function (event) {
            console.log(this.$el.acstkn.value)
            //this.$el.submit()
        }
    }
}
var compOne = {
    mixins: [mixin],
    template: `
        <form :action="api">
            <h1>compOne</h1>
            <input type="hidden" name="clientid" v-model="clientid" />
            <input type="hidden" name="acstkn"   v-model="acstkn" />
            <input type="submit" />
        </form>
    `
}
var compTwo = {
    mixins: [mixin],
    template: `
        <form :action="api">
            <h1>compTwo</h1>
            <input type="hidden" name="clientid" v-model="clientid" />
            <input type="hidden" name="acstkn"   v-model="acstkn" />
            <input type="button" value="submit" @click="submit" />
        </form>
    `
}
var forms = {
    props: ['baseClientid', 'baseAcstkn', 'baseApi'],
    data: function () {
        return {
            clientid: this.$root.baseClientid,
            acstkn: this.$root.baseAcstkn,
            api: this.$root.baseApi
        }
    },
    components: {
        'child-component': compOne,
        'child-component-two': compTwo
    },
    template: `
    <div>
        <child-component     :clientid="clientid" :acstkn="acstkn" :api="api"></child-component>
        <child-component-two :clientid="clientid" :acstkn="acstkn" :api="api"></child-component-two>
    </div>
    `
}
var mkFromNormal = function (clientid, acstkn) {
    var api = 'http://www.api.api/order'
    new Vue({
        el: '#app',
        data: function () {
            return {
                baseClientid: clientid,
                baseAcstkn: acstkn,
                baseApi: api
            }
        },
        components: {
            'forms': forms
        }
    })
}
