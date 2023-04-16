<template lang="pug">
.flex.h-screen.w-full
  .m-auto
    section.h-screen
      .container.px-6.py-12.h-full
        .flex.justify-center.items-center.flex-wrap.h-full.g-6.text-gray-800
          div(class='md:w-8/12 lg:w-6/12 mb-12 md:mb-0')
            img.w-full(src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg", alt="Phone image")
          div(class='md:w-8/12 lg:w-5/12 lg:ml-20')
            div(v-if="_error")
              p.bg-red-500.text-red-200.text-sm.p-3.mb-5.

                {{ _error }}

            form(@submit.prevent="onSubmit")
              //  Email input 
              .mb-6
                input.form-control.block.w-full.px-4.py-2.text-xl.font-normal.text-gray-700.bg-white.bg-clip-padding.border.border-solid.border-gray-300.rounded.transition.ease-in-out.m-0(class='focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none')
              //  Password input 
              .mb-6
                input.form-control.block.w-full.px-4.py-2.text-xl.font-normal.text-gray-700.bg-white.bg-clip-padding.border.border-solid.border-gray-300.rounded.transition.ease-in-out.m-0(class='focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none')
              //  Submit button 
              button.inline-block.px-7.py-3.bg-blue-600.text-white.font-medium.text-sm.leading-snug.uppercase.rounded.shadow-md(class='hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full')
                span(v-if="isLoading") Loading...
                span(v-else) Sign in
</template>

<script setup>
const url = "https://reqres.in/api/login";

const isLoading = ref(false);
const _error = ref(null);

const form = reactive({
  email: "eve.holt@reqres.in",
  password: "cityslicka",
});

async function onSubmit () {
  if (isLoading.value) return;

  isLoading.value = true;
  const { data, error } = await useFetch(url, {
    method: "post",
    body: form,
  });

  isLoading.value = false;
  if (error.value) {
    _error.value = error.value.data.error;
    return;
  }

  const auth = useAuth();
  auth.value.isAuthenticated = true;
  navigateTo("/");
}
</script>