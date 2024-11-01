<script lang="ts" setup>
import {ref} from "vue";
const columns: any = ref([
  {
    title: 'AUTHOR',
    dataIndex: 'author',
    scopedSlots: { customRender: 'author' },
  },
  {
    title: 'FUNCTION',
    dataIndex: 'func',
    scopedSlots: { customRender: 'func' },
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
  },
  {
    title: 'EMPLOYED',
    dataIndex: 'employed',
    class: 'text-muted',
  },
  {
    title: '',
    scopedSlots: { customRender: 'editBtn' },
    width: 50,
  },
])
const authorsHeaderBtns: any = ref('')
const data:any = ref([
  {
    key: '1',
    author: {
      avatar: 'images/face-2.jpg',
      name: 'Michael John',
      email: 'michael@mail.com',
    },
    func: {
      job: 'Manager',
      department: 'Organization',
    },
    status: 1,
    employed: '23/04/18',
  },
  {
    key: '2',
    author: {
      avatar: 'images/face-3.jpg',
      name: 'Alexa Liras',
      email: 'alexa@mail.com',
    },
    func: {
      job: 'Programator',
      department: 'Developer',
    },
    status: 0,
    employed: '23/12/20',
  },
  {
    key: '3',
    author: {
      avatar: 'images/face-1.jpg',
      name: 'Laure Perrier',
      email: 'laure@mail.com',
    },
    func: {
      job: 'Executive',
      department: 'Projects',
    },
    status: 1,
    employed: '13/04/19',
  },
  {
    key: '4',
    author: {
      avatar: 'images/face-4.jpg',
      name: 'Miriam Eric',
      email: 'miriam@mail.com',
    },
    func: {
      job: 'Marketing',
      department: 'Organization',
    },
    status: 1,
    employed: '03/04/21',
  },
  {
    key: '5',
    author: {
      avatar: 'images/face-5.jpeg',
      name: 'Richard Gran',
      email: 'richard@mail.com',
    },
    func: {
      job: 'Manager',
      department: 'Organization',
    },
    status: 0,
    employed: '23/03/20',
  },
  {
    key: '6',
    author: {
      avatar: 'images/face-6.jpeg',
      name: 'John Levi',
      email: 'john@mail.com',
    },
    func: {
      job: 'Tester',
      department: 'Developer',
    },
    status: 0,
    employed: '14/04/17',
  },
])

</script>
<template>
	<a-card  :bordered="false"   :bodyStyle="{padding: 0,}">
		<template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h5 class="font-semibold m-0">Authors Table</h5>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<a-radio-group v-model="authorsHeaderBtns" size="small">
						<a-radio-button value="all">ALL</a-radio-button>
						<a-radio-button value="online">ONLINE</a-radio-button>
					</a-radio-group>
				</a-col>
			</a-row>
		</template>
		<a-table :columns="columns" :data-source="data" :pagination="false">

		</a-table>
	</a-card>
</template>
