import { createTriggers } from '../database/schema'
export default defineNitroPlugin(() => {
    hubHooks.hook('database:migrations:done', async () => {
      console.log('NuxtHub bindings are ready!')
      
      const isCreatedViewsTrigger = await hubKV().has('is_created_views_trigger')
        if(!isCreatedViewsTrigger) {
          const db = hubDatabase()
          await db.exec(createTriggers)
          console.log('Triggers are created!')
          await hubKV().set('is_created_views_trigger', 1)
        }
    })
  })