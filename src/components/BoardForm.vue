<template>
    <div>
        <div :style="`background-image: url(${imgPath}); height: 300px; align-items: center; justify-content: center; background-size: cover; display: flex;`">
            <div class="text-center font-weight-bolder " style="font-size: 2.5em; color: #eeeeee">{{title}}</div>
        </div>
        <div id="wrapper" class="board-wrapper">
            <b-card bg-variant="light">
                <div class="p-3">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "BoardForm",
        props: {
            title: {
                type: String,
                value: null
            },
            type: {
                type: String,
                value: null
            },
            imgPath: {
                type: String,
                value: null
            }
        },
        methods: {
            formatNames(files) {
                if (files.length === 1) {
                    return files[0].name
                } else {
                    return `${files.length} files selected`
                }
            }
        }
    }
</script>

<style scoped>
    .board-wrapper {
        width: 50%;
    }
    @media screen and (max-width: 736px) {
        .board-wrapper {
            margin-top: 20px;
            width: 75%;
        }

    }

    button,
    .button {
        color: #eeeeee !important;
        box-shadow: none;
        height: 3em;
        line-height: normal;
        letter-spacing: normal;
    }

</style>