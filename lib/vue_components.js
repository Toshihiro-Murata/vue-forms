var mixin = {
    props: ['clientid', 'acstkn', 'api'],
    methods: {
        submit: function (event) {
            console.log(this.$el.acstkn.value)
            //this.$el.submit()
        }
    }
}
var formOne = {
    mixins: [mixin],
    template: `
        <form :action="api">
            <h1>formOne</h1>
            <input type="hidden" name="clientid" v-model="clientid" />
            <input type="hidden" name="acstkn"   v-model="acstkn" />
            <input type="button" value="submit" @click="submit" />
        </form>
    `
}
var formTwo = {
    mixins: [mixin],
    template: `
        <form :action="api">
            <h1>formTwo</h1>
            <input type="hidden" name="clientid" v-model="clientid" />
            <input type="hidden" name="acstkn"   v-model="acstkn" />
            <input type="button" value="submit" @click="submit" />
        </form>
    `
}
var normalForms = {
    props: ['baseClientid', 'baseAcstkn', 'baseApi'],
    data: function () {
        return {
            clientid: this.$root.baseClientid,
            acstkn: this.$root.baseAcstkn,
            api: this.$root.baseApi
        }
    },
    components: {
        'form-one': formOne,
        'form-two': formTwo
    },
    template: `
    <div>
        <form-one :clientid="clientid" :acstkn="acstkn" :api="api"></form-one>
        <form-two :clientid="clientid" :acstkn="acstkn" :api="api"></form-two>
    </div>
    `
}
var mkNormalForms = function (clientid, acstkn) {
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
            'forms': normalForms
        }
    })
}
