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

ps 1560;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 1560 > /dev/null;
done;

for child in $(list_child_processes 1567);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/sgall/Library/Mobile Documents/com~apple~CloudDocs/talentojr/bin/Debug/net7.0/c2b04f5a18e84fb588b7b44fe1081ff8.sh;
