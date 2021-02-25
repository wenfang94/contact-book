const app = new Vue({
    el: '#app',
    router,
    data: {
        // contacts: [],
        // filtered: [],
        // contact: {
        //     id: '',
        //     firstName: '',
        //     lastName: '',
        //     email: '',
        //     phone: '',
        //     street: '',
        //     city: '',
        //     province: '',
        //     postal: '',
        // }
    },
    methods: {
        
        
        updateContact: function () {
            db.collection('contact book').doc(this.contact.id).set({
                firstName: this.contact.firstName,
                lastName: this.contact.lastName,
                email: this.contact.email,
                phone: this.contact.phone,
                street: this.contact.street,
                city: this.contact.city,
                province: this.contact.province,
                postal: this.contact.postal
            }).then(doc => console.log(doc.id))
        },
    }
})