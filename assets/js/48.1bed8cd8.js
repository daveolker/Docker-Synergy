(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{169:function(e,n,o){"use strict";o.r(n);var s=o(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"playbooks-for-adding-windows-vm-workers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-for-adding-windows-vm-workers","aria-hidden":"true"}},[e._v("#")]),e._v(" Playbooks for adding Windows VM workers")]),o("ul",[o("li",[o("code",[e._v("playbooks/provision_nodes.yml")]),e._v(" will create all the necessary Windows 2016 VMs for the environment based on the Windows VM Template defined in the "),o("code",[e._v("win_vm_template")]),e._v(" variable. Windows workers nodes are defined in the group "),o("code",[e._v("vm_wrk_win")]),e._v(" in the "),o("code",[e._v("hosts")]),e._v(" inventory.")]),o("li",[o("code",[e._v("playbooks/install_docker.yml")]),e._v(" installs Docker along with all its dependencies on your Windows VMs")]),o("li",[o("code",[e._v("playbooks/scale_workers.yml")]),e._v(" installs and configures additional Windows VM workers on the target nodes defined by the group "),o("code",[e._v("vm_wrk_win")]),e._v(" in the "),o("code",[e._v("hosts")]),e._v(" inventory.")]),o("li",[o("code",[e._v("playbooks/splunk_uf_win.yml")]),e._v(" installs and configures the Splunk Universal Forwarder on each Windows machine in the inventory.")])])])}],!1,null,null,null);n.default=i.exports}}]);