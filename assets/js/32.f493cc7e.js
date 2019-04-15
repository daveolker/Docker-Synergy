(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{154:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"restoring-your-cluster-after-a-disaster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restoring-your-cluster-after-a-disaster","aria-hidden":"true"}},[e._v("#")]),e._v(" Restoring your cluster after a disaster")]),r("p",[e._v("The playbooks address a disaster recovery scenario where you have lost your entire cluster and all the VMs. Other scenarios and how to handle them are described in the Docker documentation including the following scenarios:")]),r("ul",[r("li",[e._v("You have lost one UCP instance but your cluster still has the quorum. The easiest way is to recreate the missing UCP instance from scratch.")]),r("li",[e._v("You have lost the quorum in your UCP cluster but there is still one UCP instance running.")]),r("li",[e._v("You have lost one instance of DTR but still have a quorum of replicas. The easiest way is to recreate the missing DTR instance from scratch.")]),r("li",[e._v("You have lost the quorum of your DTR cluster but still have one DTR instance running.")])]),r("h2",{attrs:{id:"before-you-restore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#before-you-restore","aria-hidden":"true"}},[e._v("#")]),e._v(" Before you restore")]),r("p",[r("strong",[e._v("Step 1.")]),e._v(" Retrieve the backup files using your chosen backup solution and save them to a folder on your Ansible server. If you have used timestamps in the naming of your backup files, you can use them to determine the chronological order. If you used the "),r("code",[e._v("backup.sh")]),e._v(" script specifying a date prefix, you can use that to identify the matching set of backup files. You should choose the files in the following reverse chronological order, from the most recent to the oldest file. Make sure you restore both the "),r("code",[e._v("*.tgz")]),e._v(" and the "),r("code",[e._v("*.vars.tgz")]),e._v(" files.")]),r("ol",[r("li",[e._v("DTR images backup")]),r("li",[e._v("DTR metadata backup")]),r("li",[e._v("UCP backup")]),r("li",[e._v("Swarm backup")])]),r("p",[e._v("In this example, we will assume a set of backup files stored in "),r("code",[e._v("/root/restore")]),e._v(" that were created specifying a date prefix. These will have names like "),r("code",[e._v("2018_04_17_151734_swarm.tgz")]),e._v(", "),r("code",[e._v("2018_04_17_151734_ucp.tgz")]),e._v(", etc and the corresponding "),r("code",[e._v(".vars.tgz")]),e._v(" files.")]),r("p",[r("strong",[e._v("Step 2:")]),e._v(" Retrieve the DTR replica ID, the DTR version and the UCP version")]),r("p",[e._v("To retrieve the ID of the replica that was backed up, as well as the version of DTR, you need to extract the data from the "),r("code",[e._v(".vars.tgz")]),e._v(" file associated with the archive of the DTR metadata. You can retrieve this as follows:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# tar -Oxf /root/restore/2018_04_17_151734_dtr_meta.vars.tgz meta.yml\nbackup_node="hpe-dtr01"\nreplica_id="ad5204e8a4d0"\nbackup_source=""\nucp_version=""\ndtr_version="2.4.3"\n\n')])]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# tar -Oxf /root/restore/2018_04_17_151734_ucp.vars.tgz meta.yml\nbackup_node="hpe-ucp01"\nreplica_id=""\nbackup_source=""\nucp_version="2.2.7"\ndtr_version=""\n')])]),r("p",[e._v("Take note of the replica ID ("),r("code",[e._v("ad5204e8a4d0")]),e._v("), the version of DTR ("),r("code",[e._v("2.4.3")]),e._v(") and the version of UCP ("),r("code",[e._v("2.2.7")]),e._v(").")]),r("p",[r("strong",[e._v("Step 3:")]),e._v(" Populate the "),r("code",[e._v("group_vars/all/backups")]),e._v(" file")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('backup_swarm: "/root/restore/2018_04_17_151734_swarm.tgz"\nbackup_ucp: "/root/restore/2018_04_17_151734_ucp.tgz"\nbackup_dtr_meta: "/root/restore/2018_04_17_151734_dtr_meta.tgz"\nbackup_dtr_data: "/root/restore/2018_04_17_151734_dtr_data.tgz"\nbackup_dtr_id: "ad5204e8a4d0"\nbackup_dest: "/root/backups"\nbackup_server: <IP of your ansible box>\n')])]),r("p",[e._v("You should populate your "),r("code",[e._v("group_vars/all/backups")]),e._v(" file as above, with the "),r("code",[e._v("backup_dtr_id")]),e._v(" variable containing the value you retrieved in the preceding step as "),r("code",[e._v('replica_id="ad5204e8a4d0"')]),e._v(".")]),r("p",[r("strong",[e._v("Step 4:")]),e._v(" Verify that your "),r("code",[e._v("group_vars/all/vars")]),e._v(" file specifies the correct versions of DTR and UCP.")]),r("p",[e._v("The playbooks use the versions of UCP and DTR as specified in your "),r("code",[e._v("group_vars/all/vars")]),e._v(" file to restore your backups. You must ensure that the versions specified in your current "),r("code",[e._v("group_vars/all/vars")]),e._v(" file correspond to the versions in the backups as determined above.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# cat group_vars/all/vars | grep dtr_version\ndtr_version: '2.4.3'\n")])]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\n# cat group_vars/all/vars | grep ucp_version\nucp_version: '2.2.7'\n")])]),r("p",[r("strong",[e._v("Step 5:")]),e._v(" Restore UCP admin credentials if required")]),r("p",[e._v("You must ensure that the UCP admin credentials in your current "),r("code",[e._v("group_vars/all/vars")]),e._v(" file are those that were in effect when you generated the backup files. If they have changed since then, you must restore the original credentials for the duration of the restore procedure.")]),r("p",[r("strong",[e._v("Step 6:")]),e._v(" Restore your inventory ("),r("code",[e._v("hosts")]),e._v(")")]),r("p",[e._v("Your inventory must reflect the environment that was present when the backup files were created. You can find a copy of the inventory as it was when the backup was taken in the "),r("code",[e._v("*.vars.tgz")]),e._v(" files.")]),r("h2",{attrs:{id:"restore-ucp-and-dtr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restore-ucp-and-dtr","aria-hidden":"true"}},[e._v("#")]),e._v(" Restore UCP and DTR")]),r("p",[r("strong",[e._v("Warning:")]),e._v(" This procedure is aimed at restoring a cluster after a disaster. It assumes you have lost all the VMs in your cluster and want to redeploy using data that you backed up earlier. The solution follows Docker best practice, which means the swarm artifacts are not restored. You will need to restore your Docker volumes and your applications (stacks and services) when this procedure is complete.")]),r("ol",[r("li",[r("p",[e._v("Ensure that you have completed all the preliminary steps as outlined in the section "),r("a",{attrs:{href:"#"}},[e._v("Before you restore")])])]),r("li",[r("p",[e._v("Run the restore playbook")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ansible-playbook -i hosts restore.yml\n")])]),r("p",[e._v("You may need to modify "),r("code",[e._v("restore.yml")]),e._v(" before you run it, depending on what optional components you have deployed. For example, if you have not deployed Splunk, you will need to comment out the line:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("- import_playbook: playbooks/splunk_uf.yml\n")])]),r("p",[e._v("If not, you will get an error saying that Splunk components could not be restored when you run the playbook.")])]),r("li",[r("p",[e._v("If you are using the image scanning functionality in DTR, you will need to re-download the vulnerability database. For more information, see the Docker documentation "),r("a",{attrs:{href:"https://docs.docker.com/datacenter/dtr/2.5/guides/admin/configure/set-up-vulnerability-scans/#get-the-security-scanning-license",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")])])]),r("p",[e._v("You are now ready to restore your Docker volumes and your applications.")]),r("h2",{attrs:{id:"restore-dtr-metadata-and-dtr-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restore-dtr-metadata-and-dtr-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Restore DTR metadata and DTR images")]),r("p",[r("strong",[e._v("Note:")]),e._v(" This procedure restores DTR metadata and images and assumes you have lost all the DTR VMs in your cluster. It will redeploy using the DTR data that you backed up earlier and will also restore the images if the folder exported by the NFS VM is empty.")]),r("ol",[r("li",[r("p",[e._v("Ensure that you have completed all the preliminary steps as outlined in the section "),r("a",{attrs:{href:"#"}},[e._v("Before you restore")]),e._v(". In this scenario, you need the archives for the DTR metadata and the DTR images.")])]),r("li",[r("p",[e._v("Ensure that all the DTR VMs listed in your inventory are destroyed, using the vSphere Web Client to delete them if required. If you want to restore the DTR images you should also delete the NFS VM.")])]),r("li",[r("p",[e._v("Remove the DTR nodes from the swarm by running the "),r("code",[e._v("docker node rm <DTR node>")]),e._v(" command on a UCP node for each DTR node in your cluster. The following example shows the sequence of commands to use to remove the DTR nodes:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# docker node ls\nID         HOSTNAME                     STATUS              AVAILABILITY\naiz... *   hpe-ucp02.cloudra.local      Ready               Active\ngvf...     hpe-dtr01.cloudra.local      Down                Active\nir4...     hpe-ucp03.cloudra.local      Ready               Active\nmwf...     hpe-dtr02.cloudra.local      Down                Active\noqy...     hpe-ucp01.cloudra.local      Ready               Active\nxqe...     hpe-worker01.cloudra.local   Ready               Active\nzdu...     hpe-dtr03.cloudra.local      Down                Active\n\n")])]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# docker node rm hpe-dtr01.cloudra.local\nhpe-dtr01.cloudra.local\n# docker node rm hpe-dtr02.cloudra.local\nhpe-dtr02.cloudra.local\n# docker node rm hpe-dtr03.cloudra.local\nhpe-dtr03.cloudra.local\n\n")])]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# docker node ls\nID         HOSTNAME                     STATUS              AVAILABILITY        \naiz...     hpe-ucp02.cloudra.local      Ready               Active     \nir4...     hpe-ucp03.cloudra.local      Ready               Active    \noqy... *   hpe-ucp01.cloudra.local      Ready               Active    \nxqe...     hpe-worker01.cloudra.local   Ready               Active\n")])])]),r("li",[r("p",[e._v("Run the restore script:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./restore_dtr.sh\n")])])]),r("li",[r("p",[e._v("If you are using the image scanning functionality in DTR, you will need to re-download the vulnerability database. For more information, see the Docker documentation "),r("a",{attrs:{href:"https://docs.docker.com/datacenter/dtr/2.5/guides/admin/configure/set-up-vulnerability-scans/#get-the-security-scanning-license",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")])])]),r("h2",{attrs:{id:"related-playbooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related-playbooks","aria-hidden":"true"}},[e._v("#")]),e._v(" Related playbooks")]),r("ul",[r("li",[r("code",[e._v("playbooks/restore_swarm.yml")]),e._v(" is used to restore the swarm data")]),r("li",[r("code",[e._v("playbooks/restore_dtr_meta.yml")]),e._v(" is used to restore DTR metadata")]),r("li",[r("code",[e._v("playbooks/restore_dtr_images.yml")]),e._v(" is used to restore DTR images")])])])}],!1,null,null,null);t.default=o.exports}}]);