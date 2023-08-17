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

ps 61765;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 61765 > /dev/null;
done;

for child in $(list_child_processes 61819);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/sgall/Projects/talentojr/bin/Debug/net7.0/1f7c981a2b8346a1a559b6a65829503b.sh;
