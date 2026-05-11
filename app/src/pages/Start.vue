<template>
    <v-container fluid>
        <div class="hero mb-12">
            <div class="main-title">
                <div class="d-flex align-center mb-2">
                    <v-chip
                        color="#3178c6"
                        variant="flat"
                        size="small"
                        class="mr-3 font-weight-bold"
                    >
                        STEP 01
                    </v-chip>
                    <span
                        class="text-overline text-grey-darken-1"
                        style="letter-spacing: 2px !important"
                    >
                        ENVIRONMENT_SETUP
                    </span>
                </div>
                <h1>Select Stack.</h1>
                <h2>Choose your<br />Battlefield</h2>
                <h3>Pick a language to start de-bugging session.</h3>
            </div>

            <div class="hero-image d-none d-md-flex justify-end align-center">
                <div class="decoration-area">
                    <div class="grid-overlay"></div>

                    <div class="icon-stack ts-icon">
                        <v-icon
                            icon="mdi-language-typescript"
                            size="120"
                        ></v-icon>
                    </div>
                    <div class="icon-stack html-icon">
                        <v-icon icon="mdi-language-html5" size="100"></v-icon>
                    </div>
                    <div class="icon-stack py-icon">
                        <v-icon icon="mdi-language-python" size="130"></v-icon>
                    </div>
                    <div class="icon-stack js-icon">
                        <v-icon
                            icon="mdi-language-javascript"
                            size="80"
                        ></v-icon>
                    </div>
                    <div class="icon-stack vue-icon">
                        <v-icon icon="mdi-vuejs" size="60"></v-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="start-section">
            <!-- Bento Grid Section -->
            <v-row class="bento-grid mt-12">
                <!-- Main Card: TypeScript -->
                <v-col cols="12" md="6" lg="5">
                    <v-card
                        class="bento-item main-card"
                        height="100%"
                        flat
                        border
                    >
                        <v-card-text
                            class="d-flex flex-column fill-height pa-6"
                        >
                            <v-icon
                                icon="mdi-language-typescript"
                                color="primary"
                                size="48"
                                class="mb-4"
                            ></v-icon>
                            <div class="text-h5 font-weight-bold mb-2">
                                TypeScript
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>

                <!-- Right Side Grid -->
                <v-col cols="12" md="6" lg="7">
                    <v-row>
                        <!-- Medium Card: Python -->
                        <v-col cols="12" sm="7">
                            <v-card
                                class="bento-item secondary-card"
                                height="200"
                                flat
                                border
                            >
                                <v-card-text class="pa-6">
                                    <div
                                        class="d-flex justify-space-between align-center mb-4"
                                    >
                                        <div class="text-h6 font-weight-bold">
                                            Python Script
                                        </div>
                                        <v-icon
                                            icon="mdi-language-python"
                                            color="blue-darken-2"
                                            size="32"
                                        ></v-icon>
                                    </div>
                                    <div
                                        class="text-caption text-medium-emphasis"
                                    >
                                        Automation & Data Analysis
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <!-- Small Card: Vue.js -->
                        <v-col cols="12" sm="5">
                            <v-card
                                class="bento-item mini-card"
                                height="200"
                                flat
                                border
                            >
                                <v-card-text
                                    class="d-flex flex-column align-center justify-center fill-height"
                                >
                                    <v-icon
                                        icon="mdi-vuejs"
                                        color="success"
                                        size="40"
                                    ></v-icon>
                                    <span class="mt-2 font-weight-bold"
                                        >Vue.js</span
                                    >
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <!-- Wide Card: JavaScript -->
                        <v-col cols="12">
                            <v-card
                                class="bento-item horizontal-card"
                                flat
                                border
                            >
                                <div
                                    class="d-flex flex-no-wrap justify-space-between align-center"
                                >
                                    <div>
                                        <v-card-title
                                            class="text-h6 font-weight-bold pb-0"
                                            >JavaScript</v-card-title
                                        >
                                        <v-card-subtitle
                                            >The engine of the
                                            web</v-card-subtitle
                                        >
                                        <v-card-actions>
                                            <v-btn
                                                variant="text"
                                                size="small"
                                                color="warning"
                                                >View Console</v-btn
                                            >
                                        </v-card-actions>
                                    </div>
                                    <v-avatar
                                        class="ma-5"
                                        size="70"
                                        rounded="lg"
                                    >
                                        <v-icon
                                            icon="mdi-language-javascript"
                                            color="warning"
                                            size="50"
                                        ></v-icon>
                                    </v-avatar>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<style lang="scss" scoped>
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 35px;
    max-width: 1100px;
    margin: 60px auto 0;
    animation: fadeUp 0.6s ease-out;
}

.main-title {
    flex: 1.2;
    h1 {
        font-family: "Inter";
        font-size: 24px;
        font-weight: bold;
        color: #3178c6;
        margin-bottom: 8px;
    }
    h2 {
        font-family: "Inter", sans-serif;
        font-size: 48px;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 16px;
    }
    h3 {
        font-weight: bold;
        font-size: 18px;
        color: #999999;
    }
}

.glass-card {
    background: rgba(var(--v-theme-surface), 0.6);
    backdrop-filter: blur(10px);
}

.decoration-area {
    position: relative;
    width: 400px;
    height: 300px;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
}

.icon-stack {
    position: absolute;
    filter: grayscale(0);
}

.ts-icon {
    top: -20px;
    right: 20px;
    color: #3178c6;
    opacity: 0.7;
    transform: rotate(15deg);
}

.html-icon {
    bottom: 20px;
    left: 40px;
    color: #e34c26;
    opacity: 0.2;
    transform: rotate(-10deg);
}

.py-icon {
    bottom: 200px;
    left: 20px;
    color: #3572a5;
    opacity: 0.5;
    transform: rotate(130deg);
}

.js-icon {
    top: 40%;
    right: 40%;
    color: #f1e05a;
    opacity: 0.4;
    transform: rotate(-25deg);
}

.vue-icon {
    bottom: 10%;
    right: 10%;
    color: #41b883;
    opacity: 0.7;
    transform: rotate(5deg);
}

.grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(49, 120, 198, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(49, 120, 198, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
}

.start-section {
    max-width: 1100px;
    margin: 60px 0px 30px 0px;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 960px) {
    .hero {
        text-align: center;
        flex-direction: column;
    }
    .main-title h2 {
        font-size: 36px;
    }
}

.bento-grid {
    max-width: 1100px;
    margin: 0 auto;

    .bento-item {
        border-radius: 24px !important;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

        background-color: rgb(var(--v-theme-surface)) !important;
        border-color: rgba(
            var(--v-border-color),
            var(--v-border-opacity)
        ) !important;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border-color: rgb(var(--v-theme-primary)) !important;
        }
    }

    .main-card {
        background: linear-gradient(
            135deg,
            rgb(var(--v-theme-surface)) 0%,
            rgba(var(--v-theme-primary), 0.05) 100%
        ) !important;
    }
}
</style>
