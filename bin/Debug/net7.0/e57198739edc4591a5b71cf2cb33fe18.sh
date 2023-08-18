function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 4562;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 4562 > /dev/null;
done;

for child in $(list_child_processes 4580);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/sgall/Projects/talentojr/bin/Debug/net7.0/e57198739edc4591a5b71cf2cb33fe18.sh;
