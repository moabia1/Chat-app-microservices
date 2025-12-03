import mongoose from "mongoose";
export interface Ichat {
    users: string[];
    latestMessage: {
        text: string;
        sender: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const Chat: mongoose.Model<Ichat, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, Ichat, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Ichat & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<Ichat, mongoose.Model<Ichat, any, any, any, mongoose.Document<unknown, any, Ichat, any, mongoose.DefaultSchemaOptions> & Ichat & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, Ichat>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Ichat, mongoose.Document<unknown, {}, Ichat, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Ichat & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    users?: mongoose.SchemaDefinitionProperty<string[], Ichat, mongoose.Document<unknown, {}, Ichat, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Ichat & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    latestMessage?: mongoose.SchemaDefinitionProperty<{
        text: string;
        sender: string;
    }, Ichat, mongoose.Document<unknown, {}, Ichat, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Ichat & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<Date, Ichat, mongoose.Document<unknown, {}, Ichat, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Ichat & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<Date, Ichat, mongoose.Document<unknown, {}, Ichat, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Ichat & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Ichat>, Ichat>;
//# sourceMappingURL=chat.model.d.ts.map