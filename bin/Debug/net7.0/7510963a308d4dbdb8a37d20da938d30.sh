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

ps 30540;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 30540 > /dev/null;
done;

for child in $(list_child_processes 30549);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/sgall/Library/Mobile Documents/com~apple~CloudDocs/talentojr/bin/Debug/net7.0/7510963a308d4dbdb8a37d20da938d30.sh;
