class PriorityQueue
{
    constructor()
    {
        this.items = [];
    }

    enqueue(element, priority)
    {
        const task = {element, priority};
        let added = false;

        for(let i=0; i<this.items.length; i++)
        {
            if(this.items[i].priority > task.priority)
            {
                this.items.splice(i,0,task);
                added = true;
                break;
            }
        }

        if(!added)
        {
            this.items.push(task);
        }
    }

    dequeue()
    {
        if(this.isEmpty())
        {
            return "Underflow";
        }
        return this.items.shift();
    }

    isEmpty()
    {
        return this.items.length === 0;
    }

    printQueue()
    {
        return this.items.map(item => `${item.element} - Priority: ${item.priority}`).join('\n');
    }

    peek()
    {
        if(this.isEmpty())
        {
            return null;
        }
        return this.items[0];
    }

    remove(element)
    {
        const index = this.items.findIndex(item => item.element === element);
        if(index !== -1)
        {
            this.items.splice(index,1);
        }
    }

}