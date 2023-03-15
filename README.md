# node-event-bus

Proyecto para entender como funcionan los "event bus" en un entorno de microservicios para que la perdida de información sea mínima.

Hay un pequeño cliente con React y 5 microservicios distintos. Activar todos con "npm start".

El servicio **query** se encarga de postear los datos, si este servicio se cae pero el de **event-bus** se mantiene en pie, al volver a conectar el de *query* se podrá ver que no se ha perdido ningún evento.
