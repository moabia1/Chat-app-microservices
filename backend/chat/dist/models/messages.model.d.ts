import mongoose, { Types } from "mongoose";
export interface IMessage {
    chatId: Types.ObjectId;
    sender: string;
    text?: string;
    image?: {
        url: string;
        publicId: string;
    };
    messageType: "text" | "image";
    seen: Boolean;
    seenAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Messages: mongoose.Model<IMessage, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IMessage, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<IMessage, mongoose.Model<IMessage, any, any, any, mongoose.Document<unknown, any, IMessage, any, mongoose.DefaultSchemaOptions> & IMessage & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any, IMessage>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IMessage, mongoose.Document<unknown, {}, IMessage, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    chatId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    sender?: mongoose.SchemaDefinitionProperty<string, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    text?: mongoose.SchemaDefinitionProperty<string | undefined, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    image?: mongoose.SchemaDefinitionProperty<{
        url: string;
        publicId: string;
    } | undefined, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    messageType?: mongoose.SchemaDefinitionProperty<"text" | "image", IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    seen?: mongoose.SchemaDefinitionProperty<Boolean, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    seenAt?: mongoose.SchemaDefinitionProperty<Date | undefined, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<Date, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<Date, IMessage, mongoose.Document<unknown, {}, IMessage, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IMessage & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IMessage>, IMessage>;
//# sourceMappingURL=messages.model.d.ts.map