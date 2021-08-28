export interface TareaRespuesta {
    createdAt:    number | string;
    state:        boolean | null | string;
    title:        null | string;
    id:           string;
    estado?:      boolean;
    taskCreated?: string;
    checkTask?:   boolean;
}

export interface Tarea{
    title:        null | string;
    id:           string;
    state?:      boolean | null | string;
}