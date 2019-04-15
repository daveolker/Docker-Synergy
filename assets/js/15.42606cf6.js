(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{188:function(e,t,a){"use strict";a.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"ucp-metrics-in-prometheus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ucp-metrics-in-prometheus","aria-hidden":"true"}},[e._v("#")]),e._v(" UCP metrics in Prometheus")]),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),r("p",[e._v("Docker EE 2.1 uses a built-in deployment of Prometheus to power the performance graphs in the web UI for UCP. The metrics that UCP generates can be routed to a separate Prometheus, if required. A convenience playbook has been provided to configure a minimal Prometheus and Grafana deployment that can help vizualize all of the metrics that UCP generates.")]),r("p",[e._v("For more information on UCP cluster metrics, see the article at https://docs.docker.com/ee/ucp/admin/configure/collect-cluster-metrics/.")]),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),r("ul",[r("li",[e._v("Install the "),r("code",[e._v("kubectl")]),e._v(" binary on your Ansible box")]),r("li",[e._v("Install the UCP Client bundle for the "),r("code",[e._v("admin")]),e._v(" user")]),r("li",[e._v("Confirm that you can connect to the cluster by running a test command, for example, "),r("code",[e._v("kubectl get nodes")])])]),r("h2",{attrs:{id:"deploy-prometheus-and-grafana"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-prometheus-and-grafana","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy Prometheus and Grafana")]),r("p",[e._v("The playbook "),r("code",[e._v("playbooks/ucp-metrics-prometheus.yml")]),e._v(" deploys pods for Prometheus and Grafana and configures them\nto use the client bundle to access the UCP metrics. To run the playbook:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# cd ~/Docker-Synergy\n# ansible-playbook -i hosts playbooks/ucp-metrics-prometheus.yml --vault-password-file .vault_pass\n")])]),r("h2",{attrs:{id:"prometheus-ui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-ui","aria-hidden":"true"}},[e._v("#")]),e._v(" Prometheus UI")]),r("p",[e._v("The playbook exposes a port to access the user interface for Prometheus - to find the port, get the details of the "),r("code",[e._v("prometheus")]),e._v(" service:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# kubectl get svc prometheus\n\nNAME         TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE\nprometheus   NodePort   10.96.216.220   <none>        9090:34713/TCP   6d\n")])]),r("p",[e._v("The Prometheus UI can be accessed on any node in your cluster, using the port returned by "),r("code",[e._v("kubectl get svc")]),e._v(". In this instance, it is accessed at "),r("code",[e._v("http://hpe2-ucp01.am2.cloudra.local:34713")]),e._v(".")]),r("p",[r("img",{attrs:{src:a(57),alt:' "UCP metrics in Prometheus"',title:"Figure: UCP metrics in Prometheus"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" UCP metrics in Prometheus")]),r("h2",{attrs:{id:"using-grafana-to-vizualize-ucp-metrics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-grafana-to-vizualize-ucp-metrics","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Grafana to vizualize UCP metrics")]),r("p",[e._v("The playbook also exposes a port to access the Grafana UI - to find the port, get the details of the "),r("code",[e._v("grafana")]),e._v(" service:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# kubectl get svc grafana\n\nNAME      TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE\ngrafana   NodePort   10.96.177.108   <none>        3000:33118/TCP   6d\n")])]),r("p",[e._v("The Grafana UI can be accessed on any node in your cluster, using the port returned by "),r("code",[e._v("kubectl get svc")]),e._v(". In this\ninstance, it is accessed at "),r("code",[e._v("http://hpe2-ucp01.am2.cloudra.local:33118")]),e._v(". The example UCP Dashboard is taken from\nhttps://grafana.com/dashboards/9309.")]),r("p",[r("img",{attrs:{src:a(58),alt:' "UCP Dashboard in Grafana"',title:"Figure: UCP Dashboard in Grafana"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" UCP Dashboard in Grafana")])])}],s=a(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.default=o.exports},57:function(e,t,a){e.exports=a.p+"assets/img/ucp-prometheus.f636fd0f.png"},58:function(e,t,a){e.exports=a.p+"assets/img/ucp-grafana.f07deadc.png"}}]);