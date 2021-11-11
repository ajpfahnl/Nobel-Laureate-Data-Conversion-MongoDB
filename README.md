# Nobel Laureate Data Conversion (MongoDB)

The aim of this project is to create a conversion process between JSON data and MySQL (MariaDB).

## Setup
Replace `your_shared_dir` with a directory on your local machine that will be linked to `/home/cs143/shared/` in the Docker container.
```console
$ docker container rm mongo-apache
$ docker run -it -v {your_shared_dir}:/home/cs143/shared -p 8889:80 --name mongo-apache junghoo/mongo-apache
```
After creating the container, run with
```console
$ docker start -i mongo-apache
```
In your container, git clone this repository into your shared directory, then remove the `~/www/` folder and its contents and symlink a new `~/www/` folder to the cloned git repo. E.g.
```console
$ cd ~/shared/
$ git clone https://github.com/ajpfahnl/Nobel-Laureate-Data-Conversion-Mongo.git
$ cd ../
$ rm -rf www
$ ln -s shared/Nobel-Laureate-Data-Conversion-Mongo/ www
```

Additionally, ensure that the `nobel-laureates.json` file is stored in `/home/cs143/data/nobel-laureates.json`.

Then go to [http://localhost:8889/laureate.php?id=124](http://localhost:8889/laureate.php?id=124) on your local machine to view the JSON output from the API. Change the `id` field to any valid Nobel laureate id.

