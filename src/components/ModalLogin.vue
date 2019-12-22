<template>
    <div>
        <b-modal
                id="modal-login"
                ref="modal"
                title="로그인"
                @show="resetModal"
                @hide="resetModal"
                @ok="submitLogin"
                ok-title="로그인"
                cancel-title="취소"
        >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                        :state="idState"
                        label="아이디 (E-mail)"
                        label-for="id-input"
                        invalid-feedback="아이디를 입력해주세요."
                >
                    <b-form-input
                            id="id-input"
                            v-model="id"
                            :state="idState"
                            type="email"
                            required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        :state="passwordState"
                        label="비밀번호"
                        label-for="password-input"
                        invalid-feedback="비밀번호를 입력해주세요."
                >
                    <b-form-input
                            id="password-input"
                            v-model="password"
                            :state="passwordState"
                            required
                    ></b-form-input>
                </b-form-group>
            </form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "ModalLogin",
        data() {
            return {
                id: '',
                idState: null,
                password: '',
                passwordState: null,
            }
        },
        methods: {
            checkFormValidity() {
                const valid = this.$refs.form.checkValidity()
                this.idState = valid ? 'valid' : 'invalid'
                console.log(this.idState, this.passwordState)
                return valid
            },
            resetModal() {
                this.id = ''
                this.idState = null
                this.password = ''
                this.passwordState = null
            },
            submitLogin(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                // Trigger submit handler
                this.handleSubmit()
            },
            handleSubmit() {
                // Exit when the form isn't valid
                if (!this.checkFormValidity()) {
                    return
                }
                // Hide the modal manually
                this.$nextTick(() => {
                    this.$refs.modal.hide()
                })
            }
        }
    }
</script>

<style scoped>

</style>