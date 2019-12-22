<template>
    <div class="mb-3">
        <div class="text-right">
            <b-button size="sm" v-b-toggle.collapse-1 variant="light">글쓰기</b-button>
        </div>
        <b-collapse id="collapse-1" class="mt-2">
            <b-card style="background-color: #ebebeb">
                <div id="wrapper" class="p-3">
                    <b-form-group
                            label="제목"
                            label-align-sm="left"
                            :label-for="`${type}-title`"
                    >
                        <b-form-input
                                required
                                :id="`${type}-title`"></b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="닉네임"
                            label-align-sm="left"
                            :label-for="`${type}-nickname`"
                    >
                        <b-form-input  :id="`${type}-nickname`"></b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="비밀번호"
                            label-align-sm="left"
                            :label-for="`${type}-pwd`"
                    >
                        <b-form-input :id="`${type}-pwd`"></b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="내용"
                            label-align-sm="left"
                            :label-for="`${type}-content`"
                    >
                        <b-form-textarea
                                :id="`${type}-content`"
                                rows="8"
                        ></b-form-textarea>
                    </b-form-group>
                    <div class="mt-4 mb-5">
                        <b-form-group
                                label="파일 첨부"
                                label-align-sm="left"
                                :label-for="`${type}-file`"
                        >
                            <b-form-file multiple :id="`${type}-file`" :file-name-formatter="formatNames"></b-form-file>
                        </b-form-group>
                    </div>
                    <div class="text-center">
                        <span class="mr-1"><b-button>취소</b-button></span>
                        <span><b-button variant="info">등록</b-button></span>

                    </div>
                </div>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
    export default {
        name: "Write",
        props: {
            type: {
                type: String,
                value: null
            },
        }
    }
</script>

<style scoped>

</style>