## 讲项目提交到本地仓库

1. git init
   1. 创建本地仓库
   2. 只有第一次需要执行
2. git add .
   1. 开始跟踪新文件、已跟踪已修改放到暂存区，有冲突文件标记为已解决状态
   2. 将所有新增修改的文件，放入到暂存区
3. git status
   1. 如果显示全绿色 A，表示已经添加到本地项目暂存区，就可以 commit 了
4. git commit -m "description"
   1. 提交到本地仓库

## 将本地 Git 仓库中的提交推送到远程 Git 仓库流程

1. git push -u origin main
   1. 同步到远程仓库
   2. 关掉科学上网~

## 本地文件删除导致报错

1. Updates were rejected because the remote contains work that you do not have locally. This is usually caused by another repository pushing to the same ref. You may want to first integrate the remote changes (e.g., 'git pull ...') before pushing again.
   - 表明推送被拒绝，因为远程仓库中存在你本地仓库没有的提交记录。
   - 其实就是因为本地删掉了某个文件，或者在多人合作的情况下，其他人向远程仓库推送了更新
2. git pull origin main
   - 这个操作将远程仓库的更新合并到本地仓库
   - 对于自己删掉本地文件的情况，只能自己手动删除远程仓库中的文件。
   - 对于其他人向远程仓库中提交了更新的情况，才使用这个命令。
3.
