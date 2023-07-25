<template>
  <q-page class="flex flex-center column q-gutter-y-md" padding>
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">
    <q-list>
      <q-item v-for="update in updates">
        <q-item-section side top><q-icon name="done_all" color="positive" /></q-item-section>
        <q-item-section>
          <q-item-label>{{ update.when }}</q-item-label>
          <q-item-label caption>{{ update.id }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>{{ changes[update.id] || '--' }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn @click="sSwrMsg" label="Send Message" color="primary" />
  </q-page>
</template>

<script setup>
import { firestore,collection } from 'boot/firebase'
const collRef = collection(firestore,'updates')
import { useCollection } from 'vuefire'
import {useUpdateStore} from "stores/updates";
import {computed} from "vue";
const updates = useCollection(collRef)
const updateStore = useUpdateStore();
const changes = computed(() => updateStore.changes)

navigator.serviceWorker.ready.then((registration) => {
  registration.active.addEventListener('message',evt => {
    console.log('Main App Received Message',{ evt,data:evt.data })
  })
})

function sSwrMsg(){
  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage(
      "Test message sent immediately after creation",
    );
  });
}
</script>
