# Middleman
API Translator as a Service

### Install
```
npm install
```

### Build docker images
```
./middleman build
```

### Start services
```
./middleman start
```

### Run migrations
Modify `api/prisma/datamodel.prisma`
```
./middleman migrate
```

### Create db backup
```
./middleman backup
```

### Restore db from backup
```
./middleman restore [filename].sql
```

