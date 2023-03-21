# node-event-bus

Proyecto para entender como funcionan los "event bus" en un entorno de microservicios para que la perdida de información sea mínima.

Hay un pequeño cliente con React y 5 microservicios distintos. Activar todos con "npm start".

El servicio **query** se encarga de postear los datos, si este servicio se cae pero el de **event-bus** se mantiene en pie, al volver a conectar el de *query* se podrá ver que no se ha perdido ningún evento.

docker build -t alvarodr97/posts:0.0.2 . - Para crear container (directorio de posts)

kubectl apply -f posts-depl.yaml - (directorio infra/k8s) para crear el deployment. Si borras el pod, deployment se encargará de crear otro.
kubectl get deployments
kubectl get pods
kubectl delete pod
kubectl delete deploymet
kubectl apply -f . (directorio infra/k8s) aplica en todos

kubectl delete deployments --all
kubectl delete services --all
kubectl delete pods --all
kubectl delete daemonset --all

Deployment must be using the 'latest' tag in the pos spec section
Make an update to your code
Build the image **docker build -t alvarodr97/event-bus .**
Push the image to docker hub **docker push alvarodr97/event-bus**
Run the command **kubectl rollout restart deployment posts-depl**

kubectl logs posts-depl-575fb6c695-pfr4k
kubectl describe service posts-srv

posts-srv - NodePort - 4000:32356/TCP - http://localhost:32356/posts