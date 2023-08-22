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

ps 47629;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 47629 > /dev/null;
done;

for child in $(list_child_processes 47672);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/sgall/Projects/talentojr/bin/Debug/net7.0/bbe0304a46de4c9b98f651b88b5d62ea.sh;
