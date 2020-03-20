<template>
    <Layout>
        <div class="flex justify-center mb-10">
            <h1> What is this?</h1>
        </div>
        <div class="content-box">
            <Author/>
            <p>Cuti Cuti Club merupakan rebranding dari blog pribadi saya di domain sebelumnya yaitu januarfonti.com.</p>
            <h5 class="italic">Kenapa kok rebranding?</h5>
            <p>Niat awalnya sih pingin nyoba bikin jurnal travelling saya, jadi pakai domain cuticuti.club biar lebih global.</p>
            <h5 class="italic">Terus kenapa kok cuticuti.club?</h5>
            <p>Sebenernya nama cuticuti.club ini terinspirasi dari group whatsapp temen2 kantor dulu yang hobinya ngabisin jatah cuti.</p>
            <h5 class="italic">Domain yang lama mau dikemanain ?</h5>
            <p>Yang pasti januarfonti.com akan selalu diperpanjang dan kemungkinan akan saya redirect halaman domain ini.</p>
            <h5 class="italic">Terus siapa sih saya?</h5>
            <p>Kenalin nama saya Januar Fonti, biasa dipanggil Fonti. Saya adalah seorang Software Engineer di <a href="https://clearview.team" target="_blank">ClearView</a>.</p>
            <p>Oke baiklah, semoga saya tetep konsisten untuk mengisi content disini (:</p>
        </div>
    </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
export default {
    components: {
        Author
    },
    metaInfo: {
        title: 'What is this? | Cuticuti.club - A journey of Januar Fonti'
    }
}
</script>

<style>

</style>