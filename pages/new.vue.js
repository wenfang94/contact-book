const New = {
    data: function() {
        return {
            contact: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                street: '',
                city: '',
                province: '',
                postal: '',
            }
        }
    },
    methods: {
        addContact: function () {
            console.log('add contact fired')
            db.collection('contact book').add({
                firstName: this.contact.firstName.charAt(0).toUpperCase() + this.contact.firstName.slice(1),
                lastName: this.contact.lastName.charAt(0).toUpperCase() + this.contact.lastName.slice(1),
                email: this.contact.email,
                phone: this.contact.phone,
                street: this.contact.street,
                city: this.contact.city,
                province: this.contact.province,
                postal: this.contact.postal
            }).then(doc => router.push({ path: '/'}))
        },
        cancel: (doc => router.push({ path: '/'}))
    },
    template: `
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <h2 class="display-4">New Contact</h2>
                </b-col>
                
                <b-col cols="2" style="margin-top:30px; margin-left:20px;">
                    <router-link to="/">Contacts</router-link>
                </b-col>
            </b-row>
            
            <b-form @submit.prevent="addContact" @reset.prevent="cancel">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col cols="2">
                            <i class="far fa-id-card fa-2x" style="color:#ddd"></i>
                        </b-col>
                        <b-col cols="5">
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.firstName"
                                    placeholder="First name"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        
                        <b-col cols="5">
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.lastName"
                                    placeholder="Last name"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="2">
                        <i class="fas fa-envelope fa-2x" style="color:#ddd"></i>
                        </b-col>
                        
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.email"
                                    placeholder="Email"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    
                    <b-row>
                        <b-col cols="2">
                            <i class="fas fa-phone fa-2x" style="color:#ddd"></i>
                        </b-col>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.phone"
                                    placeholder="Phone"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="2">
                            <i class="fas fa-map-marked fa-2x" style="color:#ddd"></i>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.street"
                                    placeholder="Street"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="4">
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.city"    
                                    placeholder="City"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="2"></b-col>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.province"
                                    placeholder="Province"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    v-model="contact.postal"
                                    placeholder="Postal"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    
                    <b-row>
                        <b-col cols="2"></b-col>
                        <b-col cols="2">
                            <b-button type="submit" variant="info">Add</b-button>
                        </b-col>
                        <b-col cols="2">
                            <b-button type="reset" variant="secondary">Cancel</b-button>
                        </b-col>
                    </b-row>   
                </b-container>
            </b-form>
        </b-container>
    `
}