function connect_to_potgres() {
  node ./bin/checkPostgresIsReady.js
  postgres_ready=$?
}

while : ; do
  echo waiting untill postgres is ready;
  sleep 3;
  connect_to_potgres;
  [[ $postgres_ready == 1 ]] || break;
done

npm run start;
