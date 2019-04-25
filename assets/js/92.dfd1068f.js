(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{129:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware","aria-hidden":"true"}},[e._v("#")]),e._v(" Hardware")]),r("p",[e._v("Table 4 lists the hardware components that are utilized in this Reference Configuration.")]),r("p",[r("strong",[e._v("Table 4.")]),e._v(" Hardware")]),r("table",[r("thead",[r("tr",[r("th",[r("strong",[e._v("Component")])]),r("th",[r("strong",[e._v("Purpose")])])])]),r("tbody",[r("tr",[r("td",[e._v("HPE Synergy 12000 Frame")]),r("td",[e._v("Rack enclosure for compute, storage, and network hardware")])]),r("tr",[r("td",[e._v("HPE Synergy 480 Gen10 Compute Modules")]),r("td",[e._v("Hosts for running ESX servers that support UCP, DTR, worker and other nodes in the solution")])]),r("tr",[r("td",[e._v("HPE 3PAR StoreServ 8200")]),r("td",[e._v("Provides the storage for the virtual machines and the Docker backups")])]),r("tr",[r("td",[e._v("HPE StoreOnce")]),r("td",[e._v("High performance backup system")])])])]),r("h2",{attrs:{id:"hpe-synergy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hpe-synergy","aria-hidden":"true"}},[e._v("#")]),e._v(" HPE Synergy")]),r("p",[e._v("HPE Synergy, the first platform built from the ground up for composable infrastructure, empowers IT to create and deliver new value instantly and continuously. This single infrastructure reduces operational complexity for traditional workloads and increases operational velocity for the new breed of applications and services. Through a single interface, HPE Synergy composes compute, storage and fabric pools into any configuration for any application. It also enables a broad range of applications from bare metal to virtual machines to containers, and operational models like hybrid cloud and DevOps. HPE Synergy enables IT to rapidly react to new business demands.")]),r("p",[e._v("HPE Synergy Frames contain a management appliance called the HPE Synergy Composer which hosts HPE OneView. HPE Synergy Composer manages the composable infrastructure and delivers:")]),r("ul",[r("li",[e._v("Fluid pools of resources, where a single infrastructure of compute, storage and fabric boots up ready for workloads and demonstrates self-assimilating capacity.")]),r("li",[e._v("Software-defined intelligence, with a single interface that precisely composes logical infrastructures at near-instant speeds; and demonstrates template-driven, frictionless operations.")]),r("li",[e._v("Unified API access, which enables simple line-of-code programming of every infrastructure element; easily automates IT operational processes; and effortlessly automates applications through infrastructure deployment.")])]),r("h2",{attrs:{id:"server-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Server requirements")]),r("p",[e._v("The minimum platform requirement for this configuration, shown in Figure 2, is a 3 node HPE Synergy 480 Gen10 deployment with 1 node in each Synergy frame and")]),r("ul",[r("li",[e._v("384 GB DDR4-2133 RAM")]),r("li",[e._v("2 Intel® Xeon® CPU Gold 6130 2.10GHz x 16 core")]),r("li",[e._v("Single ESXi cluster with the control plane and the Docker workers spread out on all 3 nodes")])]),r("p",[e._v("The solution has also been tested on a 6 node HPE Synergy environment, with 2 nodes in each frame. In this setup, the extra 3 nodes are dedicated to Docker worker nodes. The 6 node deployment is depicted graphically in Figure 3 with the following suggested requirements for each node.")]),r("ul",[r("li",[e._v("128 GB DDR4-2133 RAM")]),r("li",[e._v("2 Intel® Xeon® CPU Gold 6130 2.10GHz x 16 core")]),r("li",[e._v("Single ESXi cluster with the control plane on 3 nodes and the Docker workers spread on the other 3 nodes.")])]),r("h2",{attrs:{id:"storage-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage requirements")]),r("p",[e._v("An HPE 3PAR array is required for ESXi datastore. This solution makes use of an HPE 3PAR StoreServ 8200 populated with:")]),r("ul",[r("li",[e._v("8x 480GB SSD for the vSphere cluster datastore")]),r("li",[e._v("8x 1.8TB HDD for the backup datastore")])]),r("p",[e._v("You should create a large virtual volume on the HPE 3PAR StoreServ to host the virtual machines and another large virtual volume for Docker backups. Create datastores on your vSphere cluster using these virtual volumes. If desired, you can create separate HPE 3PAR StoreServ virtual volumes and attach them to all vSphere cluster hosts for backing up Docker persistent volumes. It is recommended that you configure the volumes that are used for virtual machine deployments on the SSD. Storage for backups can be configured on the HDDs.")]),r("p",[e._v("Table 5 provides an overview of how the storage requirements for various components are addressed in this solution.")]),r("p",[r("strong",[e._v("Table 5.")]),e._v(" Storage overview")]),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Storage requirement")])]),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Provided by")])]),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Storage resource")])])])]),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("VMs")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("vSphere")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE 3PAR")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Persistent storage for stateful containers running under Docker swarm orchestrator")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("vSphere Docker Volume plugin")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE 3PAR")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Persistent storage for K8S - production")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("K8s NFS provisioner configured for 3PAR")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE 3PAR Virtual File Server")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Storage for K8S - non-production")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("K8s NFS provisioner configured for NFS VM")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("NFS VM")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Persistent storage backup")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("Clone using vSphere Docker Volume plugin")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE 3PAR")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("UCP, DTR backup")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("backup.sh utility script or individual backup playbooks")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("Ansible VM")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Backup to HPE StoreOnce")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE RMC")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE StoreOnce")])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Restore from HPE StoreOnce")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE RMC")]),r("td",{staticStyle:{"text-align":"left"}},[e._v("HPE 3PAR")])])])])])}],!1,null,null,null);t.default=o.exports}}]);