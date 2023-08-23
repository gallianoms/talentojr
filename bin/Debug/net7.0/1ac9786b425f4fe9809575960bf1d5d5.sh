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

ps 1802;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 1802 > /dev/null;
done;

for child in $(list_child_processes 1816);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/sgall/Projects/talentojr/bin/Debug/net7.0/1ac9786b425f4fe9809575960bf1d5d5.sh;
